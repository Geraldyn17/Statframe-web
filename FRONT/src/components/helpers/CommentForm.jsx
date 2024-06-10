
import React, { useState } from 'react';
import axios from 'axios';

const CommentForm = () => {
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (comment.length > 500) {
      setError('El comentario no puede tener más de 500 caracteres.');
      return;
    }

    const newComment = {
      id: Date.now(),
      email,
      comment,
      date: new Date().toISOString(),
    };

    try {
      await axios.post('http://localhost:3000/comments', newComment);
      setEmail('');
      setComment('');
      setError('');
      alert('Comentario registrado con éxito.');
    } catch (error) {
      console.error('Error al enviar el comentario:', error);
      setError('Error al enviar el comentario.');
    }
  };

  return (
    <div className='commentsForm'>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Comentario:</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          maxLength="500"
          required
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Enviar</button>
    </form>
    </div>
  );
};

export default CommentForm;
