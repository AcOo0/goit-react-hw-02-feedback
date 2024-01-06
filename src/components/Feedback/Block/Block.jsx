import styles from './block.module.css';

const Block = ({ title, children }) => {
    return (
        <div className={styles.block}>
            <h3 className={styles.blockTitle}>{title}</h3>
            {children}
        </div>
    )
}

export default Block