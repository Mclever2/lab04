import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>PELISPLUS</h1>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: 'black',
    padding: '20px',
    textAlign: 'center',
  },
  title: {
    color: 'white',
    fontSize: '45px',
    fontWeight: 'bold',
  },
};

export default Header;
