import { Request } from 'express';
import { RequestBody } from '../../../libs/rest/types/request-body.type.js';
import { RequestParams } from '../../../libs/rest/types/request.params.type.js';
import { CreateWorkoutDto } from '../dto/create-workout.dto.js';

export type CreateWorkoutRequest = Request<RequestParams, RequestBody, CreateWorkoutDto>;
