const styles = {
    container: {
        minHeight: 'calc(100vh - 50px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 500,
        fontSize: 48,
        textAlign: 'center',
        color: 'tomato',
    },
};

const HomeView = () => (
    <div style={styles.container}>
        <h1 style={styles.title}>
           Happy to see you{' '}
            <span role='img' aria-label="Hello icon">
                🙌🏻
            </span>
        </h1>
    </div>
);

export default HomeView;

