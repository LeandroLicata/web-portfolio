import { TECH } from "./techIcons";

interface TechChipProps {
  name: string;
}

/**
 * Chip de tecnología, compartido por Experiencia, Proyectos y Stack.
 * El icono y su color salen del registro de `techIcons`; si el nombre no está
 * ahí, el chip se renderiza igual, solo que sin icono.
 */
export default function TechChip({ name }: TechChipProps) {
  const entry = TECH[name];

  return (
    <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-sm border border-border-soft/60 bg-background-darker/40 px-2 py-1 text-xs text-text-secondary">
      {entry && (
        <entry.Icon
          aria-hidden="true"
          className="h-4 w-4 shrink-0"
          style={{ color: entry.color }}
        />
      )}
      {name}
    </span>
  );
}
