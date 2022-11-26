export interface IPawnProps {
    element: 'scissor' | 'paper' | 'rock' | 'spock' | 'lizard',
    small?: boolean | undefined;
    big?: boolean | undefined;
}