export type Tpost = {
    userID: number;
    id: number;
    title: string;
    body: string;
    views: number;
    reactions: {likes:number, dislike:number}
}
