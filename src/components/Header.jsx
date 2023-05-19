import logoSVG from "../images/logo.svg";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <div className={styles.header}>

      <div className={styles.logo}>
        <img src={logoSVG} alt="icon with sun"/>
        <p>REACT WEATHER</p>
      </div>

      <div className={styles.rightBlock}>
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17.6667 7.09792V27.7917C12.8396 27.7917 8.91667 23.9562 8.91667 19.2312C8.91667 16.9562 9.82083 14.8125 11.4687 13.1937L17.6667 7.09792ZM17.6667 3L9.42708 11.1083C7.3125 13.1937 6 16.0667 6 19.2312C6 25.575 11.2208 30.7083 17.6667 30.7083C24.1125 30.7083 29.3333 25.575 29.3333 19.2312C29.3333 16.0667 28.0208 13.1937 25.9062 11.1083L17.6667 3Z"
            fill="#4793FF"/>
        </svg>
        <p>Выбрать город <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_2_513)">
            <path d="M6.85674 9.86234L12.853 3.84946C13.0493 3.65245 13.049 3.3335 12.852 3.13682C12.655 2.9403 12.3358 2.94081 12.1393 3.13784L6.49998 8.79281L0.860642 3.13763C0.66412 2.94063 0.345189 2.94012 0.148159 3.13662C0.0493898 3.23521 4.75199e-06 3.36437 4.74634e-06 3.49353C4.74071e-06 3.62236 0.0490589 3.75102 0.147142 3.84943L6.14324 9.86234C6.23764 9.95722 6.36612 10.0105 6.49998 10.0105C6.63384 10.0105 6.76216 9.95707 6.85674 9.86234Z" fill="white"/>
          </g>
          <defs>
            <clipPath id="clip0_2_513">
              <rect width="13" height="13" fill="white" transform="translate(13) rotate(90)"/>
            </clipPath>
          </defs>
        </svg>
        </p>
      </div>
    </div>
  )
}