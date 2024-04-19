import { ParamsDictionary } from 'express-serve-static-core';

export type ParamWorkoutId = {
  workoutId: string;
} | ParamsDictionary;
