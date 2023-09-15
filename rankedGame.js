function rankingLinealSearch(ranked, player) {
  let uniq = [...new Set(ranked)];
  let rank = [];
  let len = uniq.length;
  console.log("uniq var: ", uniq);
  console.log("length uniq: ", len);
  player.forEach((p) => {
    let index = uniq.findIndex((u) => p >= u);
    rank.push(index >= 0 ? index + 1 : len + 1);
    console.log("index: ", index);
    console.log("Map rank: ", rank);
  });

  return rank;
}

function rankingBinarySearch(ranked, player) {
  const sortedRanked = [...new Set(ranked)].sort((a, b) => b - a); // Ordena los valores únicos en orden descendente

  const rank = [];

  for (const p of player) {
    let low = 0;
    let high = sortedRanked.length - 1;
    let index = -1;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      if (p === sortedRanked[mid]) {
        index = mid;
        break;
      } else if (p < sortedRanked[mid]) {
        low = mid + 1; // Cambia para buscar en la mitad superior
      } else {
        high = mid - 1; // Cambia para buscar en la mitad inferior
      }
    }

    if (index !== -1) {
      // Si se encuentra una coincidencia, ajusta el índice para obtener el rango correcto
      while (index > 0 && sortedRanked[index - 1] === p) {
        index--;
      }
      rank.push(index + 1);
    } else {
      // Si no se encuentra una coincidencia, calcula el rango basado en la posición donde debería insertarse
      rank.push(low + 1);
    }
  }

  return rank;
}

const ranked = [100, 100, 50, 40, 40, 20, 10];
const player = [5, 25, 50, 120];

console.log(rankingBinarySearch(ranked, player));
