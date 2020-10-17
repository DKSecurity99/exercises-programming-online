def bt(candles):
    max_candle = candles[0]
    count_max_candle = 0
    for candle in candles:
        if max_candle < candle:
            max_candle = candle
    for candle in candles:
        if max_candle == candle:
            count_max_candle+=1


