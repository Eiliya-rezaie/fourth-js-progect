// make function
function log(x){
    console.log(x)
}
function tryagain(){
    log(`try again ( press f5 )`)
}
function exam(){
    // make variable
    let status;
    let firstname;let lastname;
    let q1;let q2;let q3;let q4;
    let point=0;
    // end make variable
    // make array
    let fullname=[];let awnser=[[],[]];
    // end make array
    status=prompt(`are you ready for exam ? ( yes or no )`,`yes`);
    if(status===`yes`){
        log(`nice,now enter your name`)
        firstname=prompt(`firstname`)
        if(firstname){
            fullname.unshift(firstname);
            lastname=prompt(`lastname`)
            if(lastname){
                fullname.push(lastname);
                log(`ok ${fullname[0]} ${fullname[1]}`);
                point++;
                q1=Number(prompt(`2*5 = ? ( 1-32   2-33 )`))
                if(q1===1){
                    point++;awnser[0].unshift(q1);
                    q2=Number(prompt(`10%2 = ? ( 1-2   2-0 )`))
                    if(q2===2){
                        point++;awnser[0].push(q2);
                        q3=Number(prompt(`2+2+2*3 = ?  ( 1-10   2-18 )`))
                        if(q3===1){
                            point++;awnser[0].push(q3);
                            q4=Number(prompt(`2+7-(1+1)*3 = ?  ( 1-3   2-21 )`))
                            if(q4===1){
                                point++;awnser[0].push(q4);log(awnser)
                                log(`your point is ${point}/5`);
                                switch(point){
                                    case 1:
                                        log(`very bad`)
                                        break;
                                    case 2:
                                        log(`bad`)
                                        break;
                                    case 3:
                                        log(`good`)
                                        break;
                                    case 4:
                                        log(`very good`)
                                        break;
                                    case 5:
                                        log(`nice`);
                                        break;        
                                }

                            }else{
                                awnser[1].push(q4);
                                log(`your point is ${point}/5`);
                                switch(point){
                                    case 1:
                                        log(`very bad`)
                                        break;
                                    case 2:
                                        log(`bad`)
                                        break;
                                    case 3:
                                        log(`good`)
                                        break;
                                    case 4:
                                        log(`very good`)
                                        break;   
                                    case 5:
                                        log(`nice`);
                                        break; 
                                }
                            }
                        }else{
                            awnser[1].push(q3);
                            q4=Number(prompt(`2+7-(1+1)*3 = ?  ( 1-3   2-21 )`))
                            if(q4===1){
                                point++;awnser[0].push(q4);
                                log(`your point is ${point}/5`);
                                switch(point){
                                    case 1:
                                        log(`very bad`)
                                        break;
                                    case 2:
                                        log(`bad`)
                                        break;
                                    case 3:
                                        log(`good`)
                                        break;
                                    case 4:
                                        log(`very good`)
                                        break;    
                                    case 5:
                                        log(`nice`);
                                        break;
                                }
                            }else{
                                awnser[1].push(q4);
                                log(`your point is ${point}/5`);
                                switch(point){
                                    case 1:
                                        log(`very bad`)
                                        break;
                                    case 2:
                                        log(`bad`)
                                        break;
                                    case 3:
                                        log(`good`)
                                        break;
                                    case 4:
                                        log(`very good`)
                                        break; 
                                    case 5:
                                        log(`nice`);
                                        break;   
                                }
                            }
                        }
                    }else{
                        awnser[1].push(q2);
                        q3=Number(prompt(`2+2+2*3 = ?  ( 1-10   2-18 )`))
                        if(q3===1){
                            point++;awnser[0].push(q3);
                            q4=Number(prompt(`2+7-(1+1)*3 = ?  ( 1-3   2-21 )`))
                            if(q4===1){
                                point++;awnser[0].push(q4);
                                log(`your point is ${point}/5`);
                                switch(point){
                                    case 1:
                                        log(`very bad`)
                                        break;
                                    case 2:
                                        log(`bad`)
                                        break;
                                    case 3:
                                        log(`good`)
                                        break;
                                    case 4:
                                        log(`very good`)
                                        break;    
                                    case 5:
                                        log(`nice`);
                                        break;
                                }
                            }else{
                                awnser[1].push(q4);
                                log(`your point is ${point}/5`);
                                switch(point){
                                    case 1:
                                        log(`very bad`)
                                        break;
                                    case 2:
                                        log(`bad`)
                                        break;
                                    case 3:
                                        log(`good`)
                                        break;
                                    case 4:
                                        log(`very good`)
                                        break;
                                    case 5:
                                        log(`nice`);
                                        break;    
                                }
                            }
                        }else{
                            awnser[1].push(q3)
                            q4=Number(prompt(`2+7-(1+1)*3 = ?  ( 1-3   2-21 )`))
                            if(q4===1){
                                point++;awnser[0].push(q4);
                                log(`your point is ${point}/5`);
                                switch(point){
                                    case 1:
                                        log(`very bad`)
                                        break;
                                    case 2:
                                        log(`bad`)
                                        break;
                                    case 3:
                                        log(`good`)
                                        break;
                                    case 4:
                                        log(`very good`)
                                        break;
                                    case 5:
                                        log(`nice`);
                                        break;    
                                }
                            }else{
                                awnser[1].push(q4);
                                log(`your point is ${point}/5`);
                                switch(point){
                                    case 1:
                                        log(`very bad`)
                                        break;
                                    case 2:
                                        log(`bad`)
                                        break;
                                    case 3:
                                        log(`good`)
                                        break;
                                    case 4:
                                        log(`very good`)
                                        break;
                                    case 5:
                                        log(`nice`);
                                        break;    
                                }
                            }
                        }
                    }
                }else if(q1===1){
                    awnser[1].unshift(q1);
                    if(q2===2){
                        point++;awnser[0].push(q2);
                        q3=Number(prompt(`2+2+2*3 = ?  ( 1-10   2-18 )`))
                        if(q3===1){
                            point++;awnser[0].push(q3);
                            q4=Number(prompt(`2+7-(1+1)*3 = ?  ( 1-3   2-21 )`))
                            if(q4===1){
                                point++;awnser[0].push(q4);
                                log(`your point is ${point}/5`);
                                switch(point){
                                    case 1:
                                        log(`very bad`)
                                        break;
                                    case 2:
                                        log(`bad`)
                                        break;
                                    case 3:
                                        log(`good`)
                                        break;
                                    case 4:
                                        log(`very good`)
                                        break;
                                    case 5:
                                        log(`nice`);
                                        break;    
                                }
                            }else{
                                awnser[1].push(q4);
                                log(`your point is ${point}/5`);
                                switch(point){
                                    case 1:
                                        log(`very bad`)
                                        break;
                                    case 2:
                                        log(`bad`)
                                        break;
                                    case 3:
                                        log(`good`)
                                        break;
                                    case 4:
                                        log(`very good`)
                                        break; 
                                    case 5:
                                        log(`nice`);
                                        break;   
                                }
                            }
                        }else{
                            awnser[1].push(q3)
                            q4=Number(prompt(`2+7-(1+1)*3 = ?  ( 1-3   2-21 )`))
                            if(q4===1){
                                point++;awnser[0].push(q4);
                                log(`your point is ${point}/5`);
                                switch(point){
                                    case 1:
                                        log(`very bad`)
                                        break;
                                    case 2:
                                        log(`bad`)
                                        break;
                                    case 3:
                                        log(`good`)
                                        break;
                                    case 4:
                                        log(`very good`)
                                        break;
                                    case 5:
                                        log(`nice`);
                                        break;    
                                }
                            }else{
                                awnser[1].push(q4);
                                log(`your point is ${point}/5`);
                                switch(point){
                                    case 1:
                                        log(`very bad`)
                                        break;
                                    case 2:
                                        log(`bad`)
                                        break;
                                    case 3:
                                        log(`good`)
                                        break;
                                    case 4:
                                        log(`very good`)
                                        break;
                                    case 5:
                                        log(`nice`);
                                        break;    
                                }
                            }
                        }
                    }else{
                        awnser[1].push(q2);
                        q3=Number(prompt(`2+2+2*3 = ?  ( 1-10   2-18 )`))
                        if(q3===1){
                            point++;awnser[0].push(q3);
                            q4=Number(prompt(`2+7-(1+1)*3 = ?  ( 1-3   2-21 )`))
                            if(q4===1){
                                point++;awnser[0].push(q4);
                                log(`your point is ${point}/5`);
                                switch(point){
                                    case 1:
                                        log(`very bad`)
                                        break;
                                    case 2:
                                        log(`bad`)
                                        break;
                                    case 3:
                                        log(`good`)
                                        break;
                                    case 4:
                                        log(`very good`)
                                        break;
                                    case 5:
                                        log(`nice`);
                                        break;    
                                }
                            }else{
                                awnser[1].push(q4);
                                log(`your point is ${point}/5`);
                                switch(point){
                                    case 1:
                                        log(`very bad`)
                                        break;
                                    case 2:
                                        log(`bad`)
                                        break;
                                    case 3:
                                        log(`good`)
                                        break;
                                    case 4:
                                        log(`very good`)
                                        break;
                                    case 5:
                                        log(`nice`);
                                        break;    
                                }
                            }
                        }else{
                            awnser[1].push(q3)
                            q4=Number(prompt(`2+7-(1+1)*3 = ?  ( 1-3   2-21 )`))
                            if(q4===1){
                                point++;awnser[0].push(q4);
                                log(`your point is ${point}/5`);
                                switch(point){
                                    case 1:
                                        log(`very bad`)
                                        break;
                                    case 2:
                                        log(`bad`)
                                        break;
                                    case 3:
                                        log(`good`)
                                        break;
                                    case 4:
                                        log(`very good`)
                                        break;
                                    case 5:
                                        log(`nice`);
                                        break;    
                                }
                            }else{
                                awnser[1].push(q4);
                                log(`your point is ${point}/5`);
                                switch(point){
                                    case 1:
                                        log(`very bad`)
                                        break;
                                    case 2:
                                        log(`bad`)
                                        break;
                                    case 3:
                                        log(`good`)
                                        break;
                                    case 4:
                                        log(`very good`)
                                        break;
                                    case 5:
                                        log(`nice`);
                                        break;    
                                }
                            }
                        }
                    }
                }else{
                    log(`awnser was wrong`)
                    tryagain()
                }
            }
        }else{
            log(`name was wrong`)
            tryagain()
        }
    }else if(status===`no`){
        log(`get out`)
    }else{
        log(`anwser was wrong`)
        tryagain()
    }
}
// end make function
exam()