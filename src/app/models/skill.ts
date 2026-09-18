export interface Skill {
    type: 'word'|'icon'|'flag';
    data: string;
    grade: number;
}

export interface SkillWithCoordinates extends Skill {
    x?: number;
    y?: number;
    z?: number;
    active?: boolean;
    floatX?: number;
    floatY?: number;
    floatDuration?: number;
    floatDelay?: number;
    shineDuration?: number;
}
