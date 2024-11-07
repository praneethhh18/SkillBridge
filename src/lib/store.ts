import { create } from 'zustand';

interface User {
  id: string;
  email: string;
  name: string;
  careerGoals?: string[];
  interests?: string[];
  currentSkills?: { [key: string]: number };
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (user: User) => void;
  logout: () => void;
  updateUserProfile: (updates: Partial<User>) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  login: (user) => set({ user, isAuthenticated: true }),
  logout: () => set({ user: null, isAuthenticated: false }),
  updateUserProfile: (updates) =>
    set((state) => ({
      user: state.user ? { ...state.user, ...updates } : null,
    })),
}));

interface Assessment {
  id: string;
  skills: { [key: string]: number };
  timestamp: Date;
  recommendations?: string[];
  improvementAreas?: string[];
}

interface AssessmentState {
  currentAssessment: Assessment | null;
  assessmentHistory: Assessment[];
  startAssessment: () => void;
  submitAssessment: (skills: { [key: string]: number }) => void;
  getRecommendations: () => string[];
}

export const useAssessmentStore = create<AssessmentState>((set, get) => ({
  currentAssessment: null,
  assessmentHistory: [],
  startAssessment: () => 
    set({ currentAssessment: { id: crypto.randomUUID(), skills: {}, timestamp: new Date() } }),
  submitAssessment: (skills) => {
    const recommendations = get().getRecommendations();
    const improvementAreas = Object.entries(skills)
      .filter(([_, value]) => value < 3)
      .map(([skill]) => skill);

    set((state) => ({
      currentAssessment: null,
      assessmentHistory: [
        ...state.assessmentHistory,
        {
          ...state.currentAssessment!,
          skills,
          recommendations,
          improvementAreas,
        },
      ],
    }));
  },
  getRecommendations: () => {
    // Simulate AI recommendations based on skills
    return [
      'Consider strengthening your JavaScript skills',
      'Focus on building more complex projects',
      'Practice data structures and algorithms',
    ];
  },
}));

interface Course {
  id: string;
  title: string;
  description: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  skills: string[];
  duration: string;
  milestones: {
    id: string;
    title: string;
    completed: boolean;
  }[];
}

interface LearningState {
  recommendedCourses: Course[];
  enrolledCourses: Course[];
  progress: { [courseId: string]: number };
  setRecommendedCourses: (courses: Course[]) => void;
  enrollInCourse: (course: Course) => void;
  updateProgress: (courseId: string, progress: number) => void;
  completeMilestone: (courseId: string, milestoneId: string) => void;
}

export const useLearningStore = create<LearningState>((set) => ({
  recommendedCourses: [],
  enrolledCourses: [],
  progress: {},
  setRecommendedCourses: (courses) => set({ recommendedCourses: courses }),
  enrollInCourse: (course) =>
    set((state) => ({
      enrolledCourses: [...state.enrolledCourses, course],
      progress: { ...state.progress, [course.id]: 0 },
    })),
  updateProgress: (courseId, progress) =>
    set((state) => ({
      progress: { ...state.progress, [courseId]: progress },
    })),
  completeMilestone: (courseId, milestoneId) =>
    set((state) => ({
      enrolledCourses: state.enrolledCourses.map((course) =>
        course.id === courseId
          ? {
              ...course,
              milestones: course.milestones.map((milestone) =>
                milestone.id === milestoneId
                  ? { ...milestone, completed: true }
                  : milestone
              ),
            }
          : course
      ),
    })),
}));