interface Props {
  width: number;
  height: number;
}

export function Heart({ width, height }: Props) {
  return (
    <svg width={width} height={height} viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.3261 35.0902C-13.0065 16.6667 10.3268 -3.33332 20.3261 9.31344C30.3268 -3.33333 53.6601 16.6667 20.3261 35.0902Z" stroke="white" stroke-width="1.8"/>
    </svg>
  );
}

export function Pencil({ width, height }: Props) {
  return (
    <svg width={width} height={height} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.4963 3.3906L14.5019 0.667252L2.52452 11.5607L1.32678 15.3734L5.51888 14.284L17.4963 3.3906ZM12.1065 2.84593L15.1008 5.56929L12.1065 2.84593ZM2.52452 11.5607L5.51888 14.284L2.52452 11.5607Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
}

export function Trash({ width, height }: Props) {
  return (
    <svg width={width} height={height} viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.21132 1.9908H5.04288C5.13552 1.9908 5.21132 1.92462 5.21132 1.84374V1.9908H11.6117V1.84374C11.6117 1.92462 11.6875 1.9908 11.7802 1.9908H11.6117V3.31435H13.1276V1.84374C13.1276 1.19483 12.5234 0.667252 11.7802 0.667252H5.04288C4.29968 0.667252 3.69543 1.19483 3.69543 1.84374V3.31435H5.21132V1.9908ZM15.8225 3.31435H1.00051C0.627855 3.31435 0.326782 3.57722 0.326782 3.90259V4.49084C0.326782 4.57172 0.402577 4.6379 0.495214 4.6379H1.76688L2.28691 14.252C2.3206 14.8789 2.91432 15.3734 3.63226 15.3734H13.1908C13.9108 15.3734 14.5025 14.8807 14.5361 14.252L15.0562 4.6379H16.3278C16.4205 4.6379 16.4963 4.57172 16.4963 4.49084V3.90259C16.4963 3.57722 16.1952 3.31435 15.8225 3.31435ZM13.0287 14.0498H3.79438L3.28487 4.6379H13.5382L13.0287 14.0498Z" fill="white"/>
    </svg>
  );
}
