import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("anunciopadrao_pkey", ["id"], { unique: true })
@Entity("anunciopadrao", { schema: "apoio" })
export class Anunciopadrao {
  @PrimaryGeneratedColumn({ type: "integer", name: "id" })
  id: number;

  @Column("text", { name: "descricao" })
  descricao: string;
}
