import { TabId, WorkoutDay } from './types';

export const WORKOUT_DATA: WorkoutDay[] = [
  {
    id: TabId.PUSH,
    label: 'PUSH',
    subLabel: 'Tue / Fri',
    exercises: [
      {
        id: 'push-1',
        name: 'Matrix Chest Press (Pin-Loaded)',
        setsReps: '3 x 10-12',
        detailedTip: 'Set seat height so handles are at nipple line. Elbows tucked slightly, not flared. Push fast, resist slowly for 3 seconds.'
      },
      {
        id: 'push-2',
        name: 'Matrix Shoulder Press',
        setsReps: '3 x 10-12',
        detailedTip: 'Crucial safety: Keep your lower back pressed firmly against the back pad. Do not arch your spine to push the weight.'
      },
      {
        id: 'push-3',
        name: 'Pec Fly Machine',
        setsReps: '3 x 10-12',
        detailedTip: 'Imagine hugging a large tree shaft. Keep a slight bend in elbows. Squeeze your inner chest hard at the center.'
      },
      {
        id: 'push-4',
        name: 'Delts Machine (Side Raise)',
        setsReps: '3 x 10-12',
        detailedTip: 'The V-Shape builder. Do not swing the weight. Lift with your elbows leading the movement, not your hands.'
      },
      {
        id: 'push-5',
        name: 'Rope Tricep Pushdown',
        setsReps: '3 x 10-12',
        detailedTip: 'Keep elbows glued to your ribs throughout the rep. Spread the rope apart forcefully at the bottom extension.'
      },
      {
        id: 'push-cardio',
        name: 'Cardio Finisher: Incline Walk',
        setsReps: 'Finisher',
        protocol: '10 Mins | Speed 4.5 | Incline 5',
        detailedTip: 'Keep a steady pace. Focus on breathing.',
        isCardio: true
      }
    ]
  },
  {
    id: TabId.PULL,
    label: 'PULL',
    subLabel: 'Wed / Sat',
    exercises: [
      {
        id: 'pull-1',
        name: 'Lat Pulldown',
        setsReps: '3 x 10-12',
        detailedTip: 'Take a grip wider than shoulders. Lean back slightly (10 degrees). Pull the bar down to touch your collarbone.'
      },
      {
        id: 'pull-2',
        name: 'Matrix Seated Row (Pin-Loaded)',
        setsReps: '3 x 10-12',
        detailedTip: 'Press your chest firmly into the support pad to protect your lower back. Pull handles to stomach, squeezing shoulder blades.'
      },
      {
        id: 'pull-3',
        name: 'Rear Delt Fly (Reverse Pec Deck)',
        setsReps: '3 x 10-12',
        detailedTip: 'Sit facing the machine pad. Keep arms straight. Pull your hands back behind you. Essential for fixing posture.'
      },
      {
        id: 'pull-4',
        name: 'Face Pulls (Cable)',
        setsReps: '3 x 10-12',
        detailedTip: "Set pulley to eye level. Pull rope towards your forehead, ending in a 'double bicep' pose. Squeeze rear shoulders."
      },
      {
        id: 'pull-5',
        name: 'Cable Bicep Curls (Low Pulley)',
        setsReps: '3 x 10-12',
        detailedTip: 'Stand tall. Elbows pinned to your sides. Curl up towards chest. Lower very slowly (3 seconds) against tension.'
      },
      {
        id: 'pull-cardio',
        name: 'Cardio Finisher: Concept 2 Rower',
        setsReps: 'Finisher',
        protocol: '500-750m | Moderate Pace | Focus on rhythm',
        detailedTip: 'Drive with legs first, then lean back, then pull with arms.',
        isCardio: true
      }
    ]
  },
  {
    id: TabId.LEGS,
    label: 'LEGS',
    subLabel: 'Thu / Sun',
    exercises: [
      {
        id: 'legs-1',
        name: 'Matrix Leg Press',
        setsReps: '3 x 10-12',
        detailedTip: 'Safety First: Place feet shoulder-width in the middle of plate. NEVER lock your knees straight. Keep a slight bend.'
      },
      {
        id: 'legs-2',
        name: 'Leg Extension',
        setsReps: '3 x 10-12',
        detailedTip: 'Kick up explosively. Hold the top contraction for 1 full second to shape the thigh muscle above the knee.'
      },
      {
        id: 'legs-3',
        name: 'Seated Leg Curl',
        setsReps: '3 x 10-12',
        detailedTip: 'Ensure the knee pad holds your legs down firmly. Drive your heels down towards your glutes. Controls knee health.'
      },
      {
        id: 'legs-4',
        name: 'Calf Raises (on Leg Press)',
        setsReps: '3 x 10-12',
        detailedTip: 'Place only the balls of your feet on the bottom edge of the platform. Get a deep stretch down, then push high on toes.'
      },
      {
        id: 'legs-cardio',
        name: 'Cardio Finisher: Incline Walk',
        setsReps: 'Finisher',
        protocol: '10 Mins | Speed 4.5 | Incline 6',
        detailedTip: 'Steady state cardio. Do not hold the handrails if possible.',
        isCardio: true
      }
    ]
  }
];