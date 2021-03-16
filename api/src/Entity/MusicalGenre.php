<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * MusicalGenre
 *
 * @ORM\Table(name="MUSICAL_GENRE")
 * @ORM\Entity
 * @ORM\Entity(repositoryClass="App\Repository\MusicalGenreRepository")
 */
class MusicalGenre
{
    /**
     * @var string
     *
     * @ORM\Column(name="IDMUSICALGENRE", type="string", length=32, nullable=false, options={"fixed"=true})
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idmusicalgenre;

    /**
     * @var string|null
     *
     * @ORM\Column(name="NAMEGENRE", type="string", length=32, nullable=true, options={"fixed"=true})
     */
    private $namegenre;

    /**
     * @var \Doctrine\Common\Collections\Collection
     *
     * @ORM\ManyToMany(targetEntity="Concert", inversedBy="idmusicalgenre")
     * @ORM\JoinTable(name="genre",
     *   joinColumns={
     *     @ORM\JoinColumn(name="IDMUSICALGENRE", referencedColumnName="IDMUSICALGENRE")
     *   },
     *   inverseJoinColumns={
     *     @ORM\JoinColumn(name="IDCONCERT", referencedColumnName="IDCONCERT")
     *   }
     * )
     */
    private $idconcert;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->idconcert = new \Doctrine\Common\Collections\ArrayCollection();
    }

    public function getIdmusicalgenre(): ?string
    {
        return $this->idmusicalgenre;
    }

    public function getNamegenre(): ?string
    {
        return $this->namegenre;
    }

    public function setNamegenre(?string $namegenre): self
    {
        $this->namegenre = $namegenre;

        return $this;
    }

    /**
     * @return Collection|Concert[]
     */
    public function getIdconcert(): Collection
    {
        return $this->idconcert;
    }

    public function addIdconcert(Concert $idconcert): self
    {
        if (!$this->idconcert->contains($idconcert)) {
            $this->idconcert[] = $idconcert;
        }

        return $this;
    }

    public function removeIdconcert(Concert $idconcert): self
    {
        $this->idconcert->removeElement($idconcert);

        return $this;
    }

}
