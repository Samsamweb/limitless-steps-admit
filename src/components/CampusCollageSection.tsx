import harvardImg from "@/assets/harvard-campus.jpg";
import yaleImg from "@/assets/yale-campus.jpg";
import stanfordImg from "@/assets/stanford-campus.jpg";
import princetonImg from "@/assets/princeton-campus.jpg";

const campuses = [
  { name: "Harvard", img: harvardImg },
  { name: "Yale", img: yaleImg },
  { name: "Stanford", img: stanfordImg },
  { name: "Princeton", img: princetonImg },
];

export function CampusCollageSection() {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground text-center mb-10">
          We Get Students In
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {campuses.map((campus) => (
            <div key={campus.name} className="relative aspect-[4/3] rounded-xl overflow-hidden group">
              <img
                src={campus.img}
                alt={`${campus.name} University campus`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
              <div className="absolute bottom-3 left-3">
                <p className="font-display text-sm font-semibold text-background">{campus.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
