import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    try {
      console.log("Fetching data...");
      const response = await axios.get("https://proyectodepractica2023.onrender.com/posts/");
      console.log("Response:", response.data);
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Posts</h1>
      <div className="row">
        {posts && posts.length > 0 && posts.map((post, index) => (
          <div key={post.id} className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              {/* <a href="#" data-bs-toggle="modal" data-bs-target={`#myModal${post.id}`}> */}
                <img className="card-img-top card-img-fixed" src={post.picture} alt="" />
              {/* </a> */}
              <div className="card-body">
                <h4 className="card-title">
                  {/* <a href="#" data-bs-toggle="modal" data-bs-target={`#myModal${post.id}`}> */}
                    {post.titulo}
                  {/* </a> */}
                </h4>
                <p className="card-text">Categoria: {post.categoria.nombre}</p>
              </div>
            </div>

            {/* <div className="modal fade" id={`myModal${post.id}`} tabIndex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                  <div className="modal-header">
                    <h4 className="modal-title" id={`myModalLabel${post.id}`}>{post.titulo}</h4>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body text-center">
                    <img className="img-fluid modal-img-fixed" src={post.picture} alt={post.titulo} />
                    <p className="modal-title mt-3">{post.descripcion}</p>
                    <div>
                      <p className="modal-title" id={`myModalLabel${post.id}`}>Categoria: {post.categoria.nombre}</p>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}
// En lugar de importar desde 'bootstrap/dist/js/bootstrap.bundle.min.js', utiliza el CDN.
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>

export default App;
