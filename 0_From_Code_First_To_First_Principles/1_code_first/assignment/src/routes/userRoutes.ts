import express from 'express';
import { areInputsValid } from '../utils';
import { ERROR_EMAIL_TAKEN, ERROR_USERNAME_TAKEN, ERROR_USER_NOT_FOUND, ERROR_VALIDATION, createUser, editUser, getUserDataByEmail } from '../controllers/userController';
import { userExists } from '../database';

const userRouter = express.Router();

userRouter.get('/', async (req, res) => {
  const email = req.query.email;

  if (typeof(email) === 'string' && email.length > 0) {
    const user = await getUserDataByEmail(email);

    if (user && user.id) {
      res.status(200).json({ 
        error: undefined, 
        data: { 
          id: user.id, 
          email: user.email, 
          username: user.username, 
          firstName: user.firstName, 
          lastName: user.lastName
        }, 
        success: true 
      });
    } else {
      res.status(404).json({ 
        error: ERROR_USER_NOT_FOUND,
        data: undefined, 
        success: false 
      })
    }
  } else {
    res.status(400).json({
      error: ERROR_VALIDATION,
      data: undefined,
      success: false,
    });
  }
});

userRouter.post('/new', async (req, res) => {
  try {
      if (!areInputsValid(req.body)){
          res.status(400).json({
              error: ERROR_VALIDATION,
              data: undefined,
              success: false,
            });
      }

      const { email, username, firstName, lastName } = req.body;
      
      const response = await createUser({ email, username, firstName, lastName });
      
      if (response?.error === ERROR_EMAIL_TAKEN) {
          res.status(409).json(response);
      }
      
      if (response?.error === ERROR_USERNAME_TAKEN) {
          res.status(409).json(response);
      }

      res.status(201).json(response);
  } catch (error) {
    console.error('Error inserting user data:', error);
  }
});

userRouter.post('/edit/:userId', async (req, res) => {
  try {
    if (!areInputsValid(req.body)){
        res.status(400).json({
            error: ERROR_VALIDATION,
            data: undefined,
            success: false,
        });
    }
  
    const userId = req.params.userId;
  
    if (userId && await userExists(userId)) {
  
      const response = await editUser(userId, req.body);
  
      if (response?.error === ERROR_USERNAME_TAKEN) {
          res.status(409).json(response);
      }
  
      if (response?.error === ERROR_EMAIL_TAKEN) {
        res.status(409).json(response);
      }
  
      res.status(200).json(response);
    } else {
        res.status(404).json({ 
            error: ERROR_USER_NOT_FOUND,
            data: undefined, 
            success: false 
        })
    }
  } catch (error) {
    console.error('Error updating user data:', error);
  }
})

export default userRouter;