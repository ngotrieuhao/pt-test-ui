type Props = {
  icon?: string;
  title: string;
  description: string;
};

export default function SliceCard({ icon, title, description }: Props) {
  return (
    <article className="bg-white rounded-xl shadow p-6 flex flex-col gap-3">
      {icon && <img src={icon} alt="" className="h-10 w-10" />}
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </article>
  );
}
