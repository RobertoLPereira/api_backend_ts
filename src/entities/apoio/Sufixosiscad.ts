import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("sufixosiscad_pkey", ["idsufixo"], { unique: true })
@Entity("sufixosiscad", { schema: "apoio" })
export class Sufixosiscad {
  @PrimaryGeneratedColumn({ type: "integer", name: "idsufixo" })
  idsufixo: number;

  @Column("character", { name: "denominacao", length: 50 })
  denominacao: string;
}
