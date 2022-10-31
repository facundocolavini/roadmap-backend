export interface Task {
    id: string;
    description: string;
    completedDate: string | null;

}

export interface TaskList {
    [key: string]: Task
}