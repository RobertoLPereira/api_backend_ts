import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Anuncio } from "./Anuncio";

@Index("pk_anunciorepasse_idanunciorepasse", ["idanunciorepasse"], {
  unique: true,
})
@Entity("anunciorepasse", { schema: "delivery" })
export class Anunciorepasse {
  @Column("integer", { name: "idpessoa" })
  idpessoa: number;

  @Column("integer", { primary: true, name: "idanunciorepasse" })
  idanunciorepasse: number;

  @Column("numeric", {
    name: "taxa",
    nullable: true,
    precision: 3,
    scale: 2,
    default: () => "0.00",
  })
  taxa: string | null;

  @ManyToOne(() => Anuncio, (anuncio) => anuncio.anunciorepasses)
  @JoinColumn([{ name: "idanuncio", referencedColumnName: "idanuncio" }])
  idanuncio: Anuncio;
}
