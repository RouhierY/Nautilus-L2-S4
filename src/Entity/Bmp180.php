<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\Bmp180Repository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: Bmp180Repository::class)]
#[ApiResource(
    collectionOperations: ['get' => ['normalization_context' => ['groups' => 'conference:list']]],
    itemOperations: ['get' => ['normalization_context' => ['groups' => 'conference:item']]],
    paginationEnabled: false,
)]
class Bmp180
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    #[Groups(['conference:list', 'conference:item'])]
    private $id;

    #[ORM\Column(type: 'float')]
    #[Groups(['conference:list', 'conference:item'])]
    private $temperature;

    #[ORM\Column(type: 'float')]
    #[Groups(['conference:list', 'conference:item'])]
    private $pression;

    #[ORM\Column(type: 'float')]
    #[Groups(['conference:list', 'conference:item'])]
    private $altitude;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(['conference:list', 'conference:item'])]
    private $date;

    #[ORM\Column(type: 'string', length: 255)]
    #[Groups(['conference:list', 'conference:item'])]
    private $heure;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTemperature(): ?float
    {
        return $this->temperature;
    }

    public function setTemperature(float $temperature): self
    {
        $this->temperature = $temperature;

        return $this;
    }

    public function getPression(): ?float
    {
        return $this->pression;
    }

    public function setPression(float $pression): self
    {
        $this->pression = $pression;

        return $this;
    }

    public function getAltitude(): ?float
    {
        return $this->altitude;
    }

    public function setAltitude(float $altitude): self
    {
        $this->altitude = $altitude;

        return $this;
    }

    public function getDate(): ?string
    {
        return $this->date;
    }

    public function setDate(string $date): self
    {
        $this->date = $date;

        return $this;
    }

    public function getHeure(): ?string
    {
        return $this->heure;
    }

    public function setHeure(string $heure): self
    {
        $this->heure = $heure;

        return $this;
    }
}
