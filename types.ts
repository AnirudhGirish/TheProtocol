export enum TabId {
  PUSH = 'PUSH',
  PULL = 'PULL',
  LEGS = 'LEGS',
}

export interface Exercise {
  id: string;
  name: string;
  setsReps: string;
  detailedTip: string;
  isCardio?: boolean;
  protocol?: string;
}

export interface WorkoutDay {
  id: TabId;
  label: string;
  subLabel: string;
  exercises: Exercise[];
}