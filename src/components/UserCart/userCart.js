import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        padding: '16px',
        boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '480px',
        boxSizing: 'border-box',
        marginBottom: '32px',
      }}
    >
      <img
        src={user.avatar}
        alt={user.user}
        style={{ borderRadius: '50%', width: '64px', height: '64px' }}
      />
      <div style={{ marginLeft: '16px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>{user.user}</h2>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <p style={{ marginRight: '16px' }}>{user.tweets} Tweets</p>
          <p>{user.followers} Followers</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
