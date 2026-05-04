export default function SectionTitle({ title }: { title: string }) {
    return (
      <div>
        <h2 className="text-4xl font-semibold text-black">
          {title}
        </h2>
  
        {/* Underline */}
        <div className="mt-3 h-[4px] w-16 bg-orange-500 rounded-full" />
      </div>
    );
  }