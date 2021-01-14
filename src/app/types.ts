export interface Poll {
  id: number; // 12
  question: string;  // Which days of week you like most?
  results: number[]; // [0, 0, 0, 0, 5, 7, 2]
  options: string[]; // ["Monday", "Tuesday", "Wednesday",...]
  thumbnail: string; // https://image.png
  voted: boolean;
}

export interface Voter {
  id: string;
  voted: number;
}
