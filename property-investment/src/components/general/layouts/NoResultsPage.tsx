const NoResultsPage = (): JSX.Element => {
  return (
    <div style={{
      position: 'absolute',
      width: '100vh',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{ paddingTop: 100, textAlign: 'center' }}>No Results</div>
    </div>
  );
};

export default NoResultsPage;