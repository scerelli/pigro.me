# Appunti di Geografia

## 1. Classificazione degli elementi cartografici

### Corsi d'acqua

- Possono essere **cartografabili** o **non cartografabili**.
- I corsi d'acqua **cartografabili** sono rappresentati sulla mappa con linee continue, tratteggiate o punteggiate.
- Solitamente si **biforcano**, distinguendosi così dalle isobate (linee di uguale profondità).

### Strade

- **Cartografabili**: rappresentate con la loro vera estensione e forma.
- **Non cartografabili**: non riportate in dettaglio sulla mappa.

### Sentieri

- Distinguibili in base ai mezzi di percorrenza consentiti.

---

## 2. Rappresentazioni Cartografiche

- **Punti quotati**: indicano l'altitudine di un punto specifico.
- **Curve di livello**: linee che uniscono punti con la stessa quota.
- **Isolinee**: comprendono isoipse (curve di livello), isobate (profondità marine), isoterme (temperature costanti), ecc.

### Isoipse

- Linee immaginarie che collegano punti della stessa quota.
- Solitamente chiuse, ma non sempre rappresentate come tali.

#### Tipologie di Isoipse

- **Direttrici**: isoipse più marcate.
- **Ausiliarie**: rappresentano quote intermedie tra due isoipse principali.

---

## 3. Coordinate Geografiche e Sistemi di Riferimento

### Tipologie di coordinate

1. **Geografiche**: latitudine e longitudine.
2. **Cartesiane**: sistema di coordinate X e Y.
3. **UTM/UPS**: suddivisione della Terra in un piano cartesiano.

### Riferimenti Geodetici

- **Ellissoide di riferimento**: modello matematico della Terra.
- **Geode**: superficie fisica della Terra considerata per misure geodetiche.
- **Sistemi di riferimento in Italia**:
    - **Roma 40**: usato per coordinate geografiche italiane.
    - **Gauss-Boaga**: proiezione usata per cartografia italiana.

### Coordinate UTM

- Sistema di coordinate basato su una griglia cartesiana.
- Suddivisione in zone numerate.
- Conversione delle coordinate in km con scale appropriate.

---

## 4. GPS e Sistemi Satellitari

- **GPS (Global Positioning System)**: sistema geodetico basato su satellite (WGS84).
- **Principi di localizzazione**:
    - La posizione è calcolata tramite l'intersezione delle sfere di distanza tra più satelliti.
    - Per una maggiore accuratezza, sono necessari almeno tre satelliti.

---

## 5. Proiezioni Cartografiche

- **Proiezioni conformi**: preservano gli angoli (es. Mercatore).
- **Proiezioni equivalenti**: preservano le aree (es. Mollweide).
- **Proiezioni azimutali**: rappresentano fedelmente le distanze da un punto centrale.

### Caso dell'Italia

- La cartografia italiana si basa sulla proiezione **Gauss-Boaga** (Roma 40).
- La divisione in fasce e coordinate segue il sistema **UTM** per una maggiore precisione.

---

## 6. Esercizi e Applicazioni Pratiche

### Conversione di coordinate

1. **Dalla rappresentazione su carta alle coordinate geografiche**:
    
    - Utilizzo di scale e conversioni per trasformare le misure.
    - Calcolo della posizione di un punto sulla mappa.
2. **Calcolo della distanza tra due punti**:
    
    - Applicazione delle formule di latitudine e longitudine.
    - Uso del teorema di Pitagora per distanze in coordinate cartesiane.

---

### Disegni e Grafici

(I disegni verranno realizzati in LaTeX per supporto a Obsidian)

#### Esempio di Isoipse

```latex
\begin{tikzpicture}
  \draw[contour] (0,0) circle (1cm);
  \draw[contour] (0,0) circle (2cm);
  \draw[contour] (0,0) circle (3cm);
\end{tikzpicture}
```

#### Sistema di coordinate geografiche

```
latex

```

$$
$$

$$
begin{tikzpicture}
  draw[->] (-2,0) -- (2,0) node[right] {Equatore};
  draw[->] (0,-2) -- (0,2) node[above] {Meridiano di Greenwich};
end{tikzpicture}
$$



Questo documento può essere integrato in Obsidian con supporto a LaTeX per visualizzare le formule e i grafici.