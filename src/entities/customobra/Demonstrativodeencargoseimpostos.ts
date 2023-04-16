import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("pk_demonstrativodeencargoseimpostos", ["idencargoimposto"], {
  unique: true,
})
@Entity("demonstrativodeencargoseimpostos", { schema: "customobra" })
export class Demonstrativodeencargoseimpostos {
  @Column("integer", { name: "empresa" })
  empresa: number;

  @Column("integer", { name: "idtipodeencargo" })
  idtipodeencargo: number;

  @PrimaryGeneratedColumn({ type: "integer", name: "idencargoimposto" })
  idencargoimposto: number;

  @Column("character varying", {
    name: "nomeencargo",
    nullable: true,
    length: 50,
  })
  nomeencargo: string | null;

  @Column("double precision", {
    name: "taxapercentualmes",
    nullable: true,
    precision: 53,
  })
  taxapercentualmes: number | null;

  @Column("integer", { name: "status", nullable: true })
  status: number | null;
}
