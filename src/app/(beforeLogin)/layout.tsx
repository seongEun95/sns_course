import styles from "@/app/page.module.css";
type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

export default function Layout({ children, modal }: Props) {
  return (
    <main className={styles.container}>
      {children}
      {modal}
    </main>
  );
}
