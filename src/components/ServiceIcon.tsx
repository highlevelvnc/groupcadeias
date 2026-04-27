import {
  IconBlueprint,
  IconBriefcase,
  IconBuilding,
  IconClipboard,
  IconHardHat,
  IconPaintRoller,
} from "@/components/icons";
import type { ServiceIcon as ServiceIconType } from "@/lib/services-data";

const ICON_MAP = {
  building: IconBuilding,
  paintRoller: IconPaintRoller,
  blueprint: IconBlueprint,
  hardHat: IconHardHat,
  clipboard: IconClipboard,
  briefcase: IconBriefcase,
} as const;

type Props = {
  icon: ServiceIconType;
  className?: string;
  size?: number;
};

/** Mapeia o tipo de ícone do data layer para o componente SVG. */
export default function ServiceIcon({ icon, className, size }: Props) {
  const Component = ICON_MAP[icon];
  return <Component className={className} size={size} />;
}
