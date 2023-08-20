import React from "react";
import { Link, useHistory } from "react-router-dom";
import BtnPlay from "../../../../components/BtnPlay";
import './style.less'

export default function MovieItem(props) {
  const history = useHistory();

  return (
    <div className="film">
      <div className="film_img">
        <div className={`film_poster`}>
          <div
            className="film_overlay"   style={{
              backgroundImage: `url(${props.movie.hinhAnh})`,
            }}
            onClick={() => history.push(`/phim/${props.movie.maPhim}`)}
          />

          <div className="play_trailer">
            <BtnPlay
              cssRoot={"play"}
              width={48}
              urlYoutube={props.movie.trailer}
            />
          </div>

        </div>
      </div>
      <div className="film_content">
        <div className="film_name">
          <div className="name">
            <p>
              <span className="c18">C18</span>
              {props.movie.maPhim}
            </p>
          </div>
          <p className="pt-2">
            <span className="text-info">Tix {props.movie.danhGia}</span>
          </p>
        </div>
        <div className="film_button">
          
        </div>
      </div>
    </div>
  );
}


