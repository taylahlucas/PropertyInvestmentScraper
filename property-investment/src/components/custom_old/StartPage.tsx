const StartPage = (): JSX.Element => {
  return (
    <div style={{
      position: 'absolute',
      width: '100vh',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{ paddingTop: 100, textAlign: 'center' }}>Welcome!</div>
    </div>
  );
};

export default StartPage;