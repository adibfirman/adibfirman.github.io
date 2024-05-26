import styles from "./styles.module.css";

export function PersonIsTyping() {
  return (
    <div className="absolute bottom-2 -ml-2 flex flex-row items-center justify-start">
      <p className="text-gray-400 font-bold text-xs">Adib Firman is typing</p>
      <span className={styles.dots}></span>
    </div>
  );
}
