/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type TabThreeParamList = {
  TabThreeScreen: undefined;
};

export type TabFourParamList = {
  TabFourScreen: undefined;
};

export type User = {
  id: String;
  name: String;
  imageUri: string;
  snils: String;
  about: String;
  phone: String;
  website: String;
  email: String;
  competence: [String];
  company: String;
  position: String;
  startDateWork: String;
  endDateWork: String;
  responsibilities: [String];
  studyPlace: String;
  specialization: String;
  degree: String;
  startDateStudy: String;
  endDateStudy: String;
  role: String;
};

export type Message = {
  id: String;
  content: string;
  createdAt: string;
  user: User;
};

export type ChatRoom = {
  id: String;
  users: [User];
  lastMessage: Message;
};

export type Event = {
  id: String;
  imageUri: string;
  name: String;
  briefDescription: String;
  type: String;
  date: String;
  time: String;
  fullDescription: String;
  address: String;
  email: String;
  website: String;
};

export type Project = {
  id: String;
  branch: String;
  name: String;
  imageUri: string;
  FIO: String;
  phone: String;
  email: String;
  team: [String];
  description: String;
  advantage: String;
  stage: String;
  intellect: String;
  problem: String;
  marketUsage: String
  consumers: String;
  competitors: String;
  launchDate: String;
  experience: String;
  resources: String;
  currentState: String;
  model: String;
  plan: String;
};
