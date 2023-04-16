import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("regimedebens_pkey", ["id"], { unique: true })
@Entity("regimedebens", { schema: "apoio" })
export class Regimedebens {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("character", {
    name: "denominacao",
    length: 30,
    default: () => "'0'",
  })
  denominacao: string;
}
