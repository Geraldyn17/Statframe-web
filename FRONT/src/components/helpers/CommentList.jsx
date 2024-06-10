import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CommentsList = () => {
  const [comments, setComments] = useState([]);
  const [editMode, setEditMode] = useState(null);
  const [editedComment, setEditedComment] = useState('');

  useEffect(() => {
    fetchComments();
  }, []);

  const fetchComments = async () => {
    try {
      const response = await axios.get('http://localhost:3000/comments');
      setComments(response.data);
    } catch (error) {
      console.error('Error al obtener los comentarios:', error);
    }
  };

  const handleEdit = (comment) => {
    setEditMode(comment.id);
    setEditedComment(comment.comment);
  };

  const handleSave = async (comment) => {
    try {
      await axios.put(`http://localhost:3000/comments/${comment.id}`, {
        ...comment,
        comment: editedComment,
      });
      setEditMode(null);
      fetchComments();
    } catch (error) {
      console.error('Error al editar el comentario:', error);
    }
  };

  return (
    <div>
      <h2>Comentarios</h2>
      {comments.map((comment) => (
        <div key={comment.id}>
          <p> ({new Date(comment.date).toLocaleString()}):</p>
          {editMode === comment.id ? (
            <div>
              <textarea
                value={editedComment}
                onChange={(e) => setEditedComment(e.target.value)}
                maxLength="500"
                required
              />
              <button onClick={() => handleSave(comment)}>Guardar</button>
              <button onClick={() => setEditMode(null)}>Cancelar</button>
            </div>
          ) : (
            <p>{comment.comment}</p>
          )}
          <button onClick={() => handleEdit(comment)}>Editar</button>
        </div>
      ))}
    </div>
  );
};

export default CommentsList;
