interface Props {
  width: number;
  height: number;
}

export function Heart({ width, height }: Props) {
  return (
    <svg width={width} height={height} viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.3261 35.0902C-13.0065 16.6667 10.3268 -3.33332 20.3261 9.31344C30.3268 -3.33333 53.6601 16.6667 20.3261 35.0902Z" stroke="white" strokeWidth="1.8"/>
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

export function LeftArrow({ width, height }: Props) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.33333 20L9.50833 18.59L3.19167 11H20V9H3.19167L9.50833 1.41L8.33333 0L0 10L8.33333 20Z" fill="#000" />
    </svg>
  );
}

export function RightArrow({ width, height }: Props) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.6667 0L10.475 1.393L16.7917 9H0V11H16.7917L10.475 18.573L11.6667 20L20 10L11.6667 0Z" fill="#000"/>
    </svg>
  );
}

export function Logout({ width, height }: Props) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 5.92539V18.0747C0 19.7488 1.36569 21.1145 3.03977 21.1145H12.8591C14.5331 21.1145 15.8988 19.7488 15.8988 18.0747V16.1069C15.8988 15.7741 15.6296 15.5048 15.2968 15.5048C14.9639 15.5048 14.6947 15.7741 14.6947 16.1069V18.0747C14.6947 19.0879 13.8674 19.9152 12.8542 19.9152H3.03977C2.02651 19.9152 1.19927 19.0879 1.19927 18.0747V5.92539C1.19927 4.91213 2.02651 4.08489 3.03977 4.08489H12.8591C13.8723 4.08489 14.6996 4.91213 14.6996 5.92539V7.89317C14.6996 8.22602 14.9688 8.49525 15.3017 8.49525C15.6345 8.49525 15.9037 8.22602 15.9037 7.89317V5.92539C15.9037 4.25131 14.538 2.88562 12.864 2.88562H3.03977C1.36569 2.88562 0 4.24642 0 5.92539Z" fill="white"/>
      <path d="M18.8653 16.5278C18.9827 16.6453 19.1345 16.704 19.2911 16.704C19.4478 16.704 19.5995 16.6453 19.717 16.5278L23.8239 12.4209C24.0588 12.186 24.0588 11.8091 23.8239 11.5741L19.717 7.46723C19.482 7.23228 19.1051 7.23228 18.8702 7.46723C18.6352 7.70219 18.6352 8.0791 18.8702 8.31406L21.954 11.3979H10.7005C10.3676 11.3979 10.0984 11.6671 10.0984 12C10.0984 12.3328 10.3676 12.602 10.7005 12.602H21.9491L18.8653 15.6859C18.6303 15.9159 18.6303 16.2977 18.8653 16.5278Z" fill="white"/>
    </svg>
  );
}

export function ShoppingCart({ width, height }: Props) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0)">
        <path d="M7.65595 18.6676C6.27214 18.6676 5.15039 19.7894 5.15039 21.1732C5.15039 22.557 6.27219 23.6787 7.65595 23.6787C9.03976 23.6787 10.1615 22.5569 10.1615 21.1732C10.1616 19.7894 9.03976 18.6676 7.65595 18.6676ZM7.65595 22.5652C6.88718 22.5652 6.26398 21.942 6.26398 21.1732C6.26398 20.4044 6.88718 19.7812 7.65595 19.7812C8.42472 19.7812 9.04791 20.4044 9.04791 21.1732C9.04796 21.942 8.42472 22.5652 7.65595 22.5652Z" fill="white"/>
        <path d="M18.235 18.6676C16.8512 18.6676 15.7295 19.7894 15.7295 21.1732C15.7295 22.557 16.8513 23.6787 18.235 23.6787C19.6188 23.6787 20.7406 22.5569 20.7406 21.1732C20.7406 19.7894 19.6189 18.6676 18.235 18.6676ZM18.235 22.5652C17.4663 22.5652 16.8431 21.942 16.8431 21.1732C16.8431 20.4044 17.4663 19.7812 18.235 19.7812C19.0038 19.7812 19.627 20.4044 19.627 21.1732C19.6271 21.942 19.0038 22.5652 18.235 22.5652Z" fill="white"/>
        <path d="M23.8865 4.05186C23.7706 3.9252 23.6119 3.84591 23.4411 3.82912L5.31741 3.57857L4.8163 2.04736C4.46327 1.02377 3.50475 0.332746 2.42206 0.321289H0.556797C0.249277 0.321289 0 0.570566 0 0.878085C0 1.1856 0.249277 1.43488 0.556797 1.43488H2.42206C3.02745 1.44826 3.56054 1.83699 3.75839 2.40929L7.29404 13.0719L7.01567 13.7122C6.70517 14.5129 6.79842 15.4141 7.26623 16.1343C7.72956 16.8416 8.50904 17.2781 9.35423 17.3035H20.1839C20.4914 17.3035 20.7407 17.0543 20.7407 16.7468C20.7407 16.4392 20.4914 16.19 20.1839 16.19H9.35418C8.87688 16.178 8.43753 15.9269 8.1849 15.5218C7.93509 15.1216 7.88377 14.6286 8.04571 14.1855L8.26845 13.6843L19.989 12.4594C21.2764 12.3176 22.3354 11.3812 22.6338 10.1208L23.9701 4.52505C24.0303 4.36391 23.9984 4.18268 23.8865 4.05186ZM21.548 9.87033C21.3673 10.6817 20.6784 11.2801 19.8498 11.3458L8.26845 12.5429L5.67934 4.69216L22.7451 4.94271L21.548 9.87033Z" fill="white"/>
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width={width} height={height} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function Search({ width, height }: Props) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.6667 16.6667L12.5802 12.5802M12.5802 12.5802C13.5604 11.6 14.1667 10.2458 14.1667 8.75004C14.1667 5.7585 11.7416 3.33337 8.75004 3.33337C5.7585 3.33337 3.33337 5.7585 3.33337 8.75004C3.33337 11.7416 5.7585 14.1667 8.75004 14.1667C10.2458 14.1667 11.6 13.5604 12.5802 12.5802Z" stroke="#333333" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}