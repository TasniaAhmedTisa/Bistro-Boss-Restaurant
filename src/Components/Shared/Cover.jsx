import { Parallax } from 'react-parallax';

const Cover = ({img,title,subtitle}) => {
    return (
        <div>
            <Parallax bgImage={img} bgImageAlt="the cat" strength={200}>
            <div
  className="hero h-[700px] mb-10"
  >
  <div className=""></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="py-14 px-36 md:py-16 md:px-56 lg:py-24 lg:px-72 bg-black bg-opacity-45">
      <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
      <p className="mb-5">
       {subtitle}
      </p>
    </div>
  </div>
</div>    </Parallax>
           
            
        </div>
    );
};

export default Cover;