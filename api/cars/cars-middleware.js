exports. checkCarId = (req, res, next) => {
  // DO YOUR MAGIC
  const account = req.accounts.map(account => account.id == req.params.id)
  if(!account) {
    res.status(400).json({error: "account not found"})
  } else {
    req.accountInfo = account
    next()
  }
}

exports. checkCarPayload = (req, res, next) => {
  // DO YOUR MAGIC
  if(!req.body) {
    res.status(400).json({error: "No Account"})
  } else if(!req.name || !req.budget) {
    res.status(400).json({error: "name and budget are required"})
  } else if(typeof req.name !== 'string') {
    res.status(400).json({error: "name of account must be a string"})
  } else if(req.name.length < 3) {
    res.status(400).json({error: "name of account must be between 3 and 100"})
  } else if(typeof req.budget !== "number") {
    res.status(400).json({error: "budget of account must be a number"})
  } else if(req.budget < 0 || req.budget > 1000000) {
    res.status(400).json({error: "budget of account is either too large or too small"})
  } else {
    req.selectedAccount = req.body
    next()
  }
}

exports. checkVinNumberValid = (req, res, next) => {
  // DO YOUR MAGIC
  if (req.vin === true){
    next()
  } else{
res.status(400).json({error: "VinNumber is not valid"})

  }
}

exports. checkVinNumberUnique = (req, res, next) => {
  // DO YOUR MAGIC
  const findName = req.accounts.map(account => account.name == req.body.name)
  if(findName) {
    res.status(400).json({error: "That name is already taken"})
  }
  next()
}
