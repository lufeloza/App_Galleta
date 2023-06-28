const PhrasesCard = ({ data}) => {
    
    return (
      <article className="phrase-card">
       
        <div className="phrase-text">
          <p>
            {data.phrase}
          </p>          
        </div>
      </article>
    );
  };
  
  export default PhrasesCard;
  