export interface Task {
    id?: number; // Cuando creamos una task podria no venir un id
    text: string,
    day: string;
    reminder: boolean;
}