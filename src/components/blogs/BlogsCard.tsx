const BlogsCards = () => {
  const data = [
    {
      img: "demo.jpg",
      heading: "Shoes! 1 ",
      description: "If a dog chews shoes whose shoes does he choose?",
      techUsed: ["Fashion", "Products"],
    },
    {
      img: "demo.jpg",
      heading: "Shoes!2",
      description: "If a dog chews shoes whose shoes does he choose?",
      techUsed: ["Fashion", "Products"],
    },
    {
      img: "demo.jpg",
      heading: "Shoes!3",
      description: "If a dog chews shoes whose shoes does he choose?",
      techUsed: ["Fashion", "Products"],
    },
    {
      img: "demo.jpg",
      heading: "Shoes!4",
      description: "If a dog chews shoes whose shoes does he choose?",
      techUsed: ["Fashion", "Products"],
    },
  ];
  return (
    <div class="grid grid-cols-3 place-items-center">
      {data.map((datas, i) => {
        if (i < 3)
          return (
            <div class="card w-96 bg-base-100 shadow-xl" key={i}>
              <figure>
                <img src={datas.img} alt="Shoes" />
              </figure>
              <div class="card-body">
                <h2 class="card-title">{datas.heading}</h2>
                <p>{datas.description}</p>
                <div class="card-actions justify-end">
                  {datas.techUsed.map((tech, i) => {
                    return (
                      <div class="badge badge-outline" key={i}>
                        {tech}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
      })}
    </div>
  );
};

export default BlogsCards;
