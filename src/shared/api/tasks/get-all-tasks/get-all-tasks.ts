import { getAllPages } from '@/shared/http';
import { validateTaskDto, toTask, TaskDto  } from './task.dto';

export async function getAllTasks(boardId: string) {
  const tasks = await getAllPages<TaskDto>({ endpoint: `board/${boardId}/tasks/` });
  return tasks.map(validateTaskDto).map(toTask);
}