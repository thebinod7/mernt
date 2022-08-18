import { ITodo } from '../types/todo';
import {model, Schema } from 'mongoose';

const todoSchema: Schema = new Schema({
    name: {type: String, required: true },
    description: {type: String, required: true },
    status: {type: Boolean, default:false }
},{ timestamps: true, collection:'todos' });

export default model<ITodo>('Todo',todoSchema);