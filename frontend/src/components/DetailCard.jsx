import React from 'react';
import {isNumber} from 'lodash';
import {formatEUR} from '../utils';

const DetailCard = ({image, title, value, body, actions, fadeOut}) => {
  const imageCtr = (
    image ? (
      <div className="image" style={{backgroundImage: `url(${image})`}}>&nbsp;</div>
    ) : null
  );
  return (
    <div className={fadeOut ? 'detail-card animated-half-second fadeOut' : 'detail-card animated-half-second fadeIn'}>
      {imageCtr}
      <div className="detail-card-main">
        <div className="title">{title}</div>
        <div className="amount">
          {isNumber(value) ? formatEUR(value) : value}
        </div>
        {body}
      </div>
      <div className="detail-card-actions">
        {actions}
      </div>
    </div>
  );
};


export const DetailCardButton = ({text, icon, onClick}) => (
  <button onClick={onClick}>
    {icon ? <i className={`fa ${icon}`} style={{paddingRight: '0.25em'}} /> : null}
    {text}
  </button>
);

DetailCard.Button = DetailCardButton;

export default DetailCard;
