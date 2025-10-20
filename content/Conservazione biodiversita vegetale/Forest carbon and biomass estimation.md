# Cos'è?

Le foreste giocano un ruolo molto importante nella de-carbonizzazione, per ovvi motivi, visto che tramite la fotosintesi immagazinano CO2 in ogni parte della vegetazione, dalle foglie, alle radici fino al suolo. 

Quindi stimare quanta CO2 contengono le foreste è un'operazione molto importante in quanto ci aiuta a dargli un extra valore. 

Per capire quanta CO2 una foresta riesce a stoccare e quanto sia la capacità di assorbimento nel tempo (carbon sequestration capacity) dobbiamo **quantificare** la biomassa.  Ovviamente non essendo possibile pesare la foresta, ci sono delle metodologie che ci permettono di fare alcune stime.


# Area basale (basal area)

L'area basale è l'area della sezione dello stelo dell'albero, misurata ad altezza del petto (breast height).

Essa rappresenza la grandezza del nostro albero. Matematicamente:

$$\Huge BA_{tree} = \pi*(\frac{DBH}{2})^2 =\pi*\frac{DBH^2}{4}$$

#### Dove:

**BA** => Area basale o basal area
**DBH** => **Diameter at Breast Height** in metri, se la misura è in centimetri dividiamo **DBH** per cento, oppure nella formula sopra, dividiamo direttamente per per 40000 direttamente.

Questa misura è molto importante in quanto ci aiuta a capire varie informazioni, come ad esempio:

- La biomassa di un albero e il suo volume approssimitivo
- Nella comprensione della competitività tra alberi per la luce e le risorse
- La produttività della foresta e il contenuto di $CO_2$ stoccato
- Dominanza delle specie
- Età delle foreste

Possiamo quindi dedurre che all'aumentare dell'area basale, ci sia un aumento di $CO_2$ stoccato all'interno del singolo albero.

## Processo pratico

Ci siamo recati su una collina di Torinese, che sono essenzialmente boschi cedui, caratterizzati da castagni e robinia. Dopo la guerra le colline torinesi erano prive di Alberi e quelli che sono stato piantati, sia robinia che castagni, sono stati scelti perchè utili alla creazione di paletti per i vigneti, specialmente la robinia. Quindi per questo abbiamo questa grande dominanza di queste specie ed una foresta molto giovane per quanto riguarda l'età.

### Step 1:
Quello che abbiamo fatto è stato in primis identificare un luogo sul quale non era così difficile suddividere lo spazio della foresta, quindi camminabile, che contenesse un buon campione di specie vegetali presenti nel bosco.

### Step 2:
A partire da un punto, abbiamo per prima cosa tirato due metri da 100m ciascuno, uno verso nord e uno verso est. Questo ci ha permesso di tracciare un area di $100_m * 100_m$ per poi suddividere ancora quest'area in sub-plot 

### Step 3:
In ogni sub-plot abbiamo censito le specie di alberi presenti, abbiamo misurato il diametro all'altezza del petto (breast height), solo degli alberi che raggiungevano 1.3 metri di altezza e avevano un diametro di almeno 1cm.

I risultati saranno approssimativi in quanto non abbiamo calcolato la $CO_2$ del materiale a terra e nel terreno che comunque assorbe una buona quantità della $CO_2$ atmosferica.

*Da verificare se ricordo bene, da chiedere al professore:*
	Se avessimo voluto conteggiare il materiale vegetativo a terra, avremmo dovuto dividere i sub-plot a loro volta in altri plot più piccoli e misurare la lunghezza degli elementi lunghi almeno la lunghezza del plot


### Step 4
Calcolo della area basale dei singoli alberi e somma delle aree del singolo plot.

$$\Huge BA_{plot}​=∑ BA_{tree}​$$

### Step 5
Trasformiamo da mq ad ettari

$$
\Huge A_{ha}​=BA_{plot} ​\times \frac{​10000}{A_{plot}}​
$$
### Step 6
Per calcolare la quantità di $CO_2$ stoccata, dobbiamo utilizzare delle equazioni **allometriche**.

$$
\Huge Aboveground Biomass (AGB)=a×(DBH)^b
$$
nella forma completa:
$$
\Huge AGB=ρ \times exp(a+bln(DBH))
$$

dove:

**AGB** -> Above ground biomass
a,b -> costanti empiriche che cambiano a seconda della specie, vedi fonti
ρ (rho) -> densità legno, si possono trovare nella tabella, vedi le fonti
### Fonti

- **Brown, S. (1997).** _Estimating biomass and biomass change of tropical forests: a primer._ FAO Forestry Paper 134. [FAO link](https://www.fao.org/3/w4095e/w4095e00.htm)
- [Global Wood Density Database (Zanne et al., 2009)](https://datadryad.org/stash/dataset/doi:10.5061/dryad.234)